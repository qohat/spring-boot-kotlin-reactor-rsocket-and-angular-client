package co.com.answering.corotriage.symptom.application

import co.com.answering.corotriage.symptom.domain.Symptom
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class SymptomService: ISymptomService {

    override fun find(id: String): Mono<Symptom?> {
        TODO("Not yet implemented")
    }

    override fun save(prospect: Symptom): Mono<Symptom> {
        TODO("Not yet implemented")
    }

    override fun findAll(): Flux<Symptom> {
        TODO("Not yet implemented")
    }
}