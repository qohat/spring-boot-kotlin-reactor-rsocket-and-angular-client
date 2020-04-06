package co.com.answering.corotriage.patient.adapter.`in`.http

import co.com.answering.corotriage.patient.application.IProspectService
import co.com.answering.corotriage.patient.domain.Prospect
import co.com.answering.corotriage.patient.domain.ProspectLocation
import co.com.answering.corotriage.patient.domain.ProspectName
import org.springframework.http.MediaType
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/prospect")
class ProspectRouting(val prospectService: IProspectService) {

    @PostMapping
    fun save(@RequestBody prospect: Prospect): Mono<Prospect> {
        return prospectService.save(prospect)
    }

    @GetMapping
    fun all() = prospectService.findAll()

    @GetMapping(value = ["/{id}/location"], produces = [MediaType.TEXT_EVENT_STREAM_VALUE])
    fun locations(@PathVariable("id") id: String) = prospectService.getLocations(id)

}

@Controller
class ProspectRSocket(val prospectService: IProspectService) {

    @MessageMapping("locations")
    fun getLocations(id: String): Flux<ProspectLocation> {
        System.out.println("Id socket " + id)
        return prospectService.getLocations(id)
    }
}