package co.com.answering.corotriage.symptom.application

import co.com.answering.corotriage.symptom.domain.Symptom
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface ISymptomService {

    fun find(id: String): Mono<Symptom?>

    fun save(prospect: Symptom): Mono<Symptom>

    fun findAll(): Flux<Symptom>
}