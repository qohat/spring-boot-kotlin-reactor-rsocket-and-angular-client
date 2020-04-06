package co.com.answering.corotriage.patient.application

import co.com.answering.corotriage.patient.adapter.out.persistence.IProspectLocationRepository
import co.com.answering.corotriage.patient.adapter.out.persistence.IProspectRepository
import co.com.answering.corotriage.patient.adapter.out.persistence.IProspectSymptomRepository
import co.com.answering.corotriage.patient.domain.*
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.time.Duration

@Service
class ProspectService(val prospectRepository: IProspectRepository,
                      val prospectLocationRepository: IProspectLocationRepository,
                      val prospectSymptomRepository: IProspectSymptomRepository): IProspectService {

    override fun find(id: String): Mono<Prospect?> {
        return Mono
                .just(prospectRepository.findById(id)
                        .map { prospectCore ->  prospectCore.toProspect() }
                        .get()
                )
    }

    override fun save(prospect: Prospect): Mono<Prospect> {
        return Mono
                .just(prospectRepository.findByDocument(prospect.document.value)
                        .map { it.toProspect() }
                        .orElseGet { prospectRepository.save(prospect.toProspectCore()).toProspect()
                                .also { p ->
                                    prospect.prospectSymptoms?.map {
                                        it.prospectId = p.id
                                        prospectSymptomRepository.save(it.toProspectSymptomCore())
                                    }
                                }
                        }
                ).doOnSuccess { p ->
                    prospect.prospectLocation?.let { location ->
                        prospectLocationRepository.findByProspectId(p.id?.value!!)
                                .map {
                                    it.lat = location.prospectLocationLat.value
                                    it.lng = location.prospectLocationLng.value
                                    prospectLocationRepository.save(it)
                                }.orElseGet {
                                    location.prospectId = p.id
                                    prospectLocationRepository.save(location.toProspectLocationCore())
                                }
                    }
                }
    }

    override fun findAll(): Flux<Prospect> {
        return Flux
                .fromIterable(
                        prospectRepository
                                .findAll()
                                .map { prospectCore -> prospectCore.toProspect() }
                )
    }

    override fun getLocations(id: String): Flux<ProspectLocation> {
        return Flux
                .interval(Duration.ofSeconds(10))
                .flatMapIterable {
                    prospectLocationRepository
                            .getLocationsFromOtherProspect(id)
                            .map { l -> l.toProspectLocation() }
                }
    }
}