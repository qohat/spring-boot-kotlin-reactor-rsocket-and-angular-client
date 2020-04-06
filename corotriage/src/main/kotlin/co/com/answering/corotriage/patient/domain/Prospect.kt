package co.com.answering.corotriage.patient.domain

import java.util.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

data class Prospect (
        val id: ProspectId?,
        val name: ProspectName,
        val lastName: ProspectLastName,
        val document: ProspectDocument,
        val email: ProspectEmail,
        val mobilePhone: ProspectMobilePhone,
        val eps: ProspectEPS,
        val prospectSymptoms: List<ProspectSymptom>?,
        val prospectLocation: ProspectLocation?
) {
    fun toProspectCore() = ProspectCore(
            UUID.randomUUID().toString(),
            name.value,
            lastName.value,
            document.value,
            email.value,
            mobilePhone.value,
            eps.value
    )
}

@Entity
@Table(name="prospects")
data class ProspectCore (
        @Id
        val id: String?,
        val name: String,
        val lastName: String,
        val document: String,
        val email: String,
        val mobilePhone: String,
        val eps: String
) {
    fun toProspect() = Prospect(
            ProspectId(id),
            ProspectName(name),
            ProspectLastName(lastName),
            ProspectDocument(document),
            ProspectEmail(email),
            ProspectMobilePhone(mobilePhone),
            ProspectEPS(eps),
            null,
            null
    )
}