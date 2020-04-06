package co.com.answering.corotriage.patient.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

data class ProspectLocation(
        var prospectId: ProspectId?,
        val prospectLocationLat: ProspectLocationLat,
        val prospectLocationLng: ProspectLocationLng
) {
    fun toProspectLocationCore() = ProspectLocationCore(
            null,
            prospectId?.value!!,
            prospectLocationLat.value,
            prospectLocationLng.value
    )
}

@Entity
@Table(name="prospect_locations")
data class ProspectLocationCore (
        @Id
    @GeneratedValue
    val id: Int?,
        val prospectId: String,
        var lat: Double,
        var lng: Double
) {
    fun toProspectLocation() = ProspectLocation(
            ProspectId(prospectId),
            ProspectLocationLat(lat),
            ProspectLocationLng(lng)
    )
}

