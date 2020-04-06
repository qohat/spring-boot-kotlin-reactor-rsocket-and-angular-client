package co.com.answering.corotriage.patient.application

import co.com.answering.corotriage.patient.domain.Prospect
import co.com.answering.corotriage.patient.domain.ProspectLocation
import co.com.answering.corotriage.patient.domain.ProspectName
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface IProspectService {

    fun find(id: String): Mono<Prospect?>

    fun save(prospect: Prospect): Mono<Prospect>

    fun findAll(): Flux<Prospect>

    fun getLocations(id: String): Flux<ProspectLocation>
}