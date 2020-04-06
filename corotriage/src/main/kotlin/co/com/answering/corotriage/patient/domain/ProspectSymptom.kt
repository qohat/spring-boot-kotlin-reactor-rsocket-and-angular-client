package co.com.answering.corotriage.patient.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

data class ProspectSymptom(
        val prospectSymptomId: ProspectSymptomId,
        var prospectId: ProspectId?,
        val prospectSymptomName: ProspectSymptomName
) {
    fun toProspectSymptomCore() = ProspectSymptomCore(
            null,
            prospectId?.value!!,
            prospectSymptomId.value
    )
}

@Entity
@Table(name="prospect_symptoms")
data class ProspectSymptomCore (
        @Id
        @GeneratedValue
        val id: Int?,
        val prospectId: String,
        val symptomId: Int
)