package co.com.answering.corotriage.symptom.domain

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

data class Symptom(
        val symptomId: SymptomId,
        val symptomName: SymptomName
) {
    fun toSymptomCore() {
        SymptomCore(
                symptomId.value,
                symptomName.value
        )
    }
}

@Entity
@Table(name="symptoms")
data class SymptomCore (
        @Id
        val id: Int,
        val name: String
) {
    fun toSymptom() = Symptom(
            SymptomId(id),
            SymptomName(name)
    )
}