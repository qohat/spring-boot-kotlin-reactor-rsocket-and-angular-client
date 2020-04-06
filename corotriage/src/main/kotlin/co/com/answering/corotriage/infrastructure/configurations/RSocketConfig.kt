package co.com.answering.corotriage.infrastructure.configurations

import org.springframework.boot.autoconfigure.rsocket.RSocketProperties
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.messaging.rsocket.RSocketRequester
import org.springframework.messaging.rsocket.RSocketStrategies
import reactor.core.publisher.Mono
import java.net.URI


@Configuration
class RSocketConfiguration {
    @LocalServerPort
    private val port = 0

    @Bean
    fun rSocketRequester(rSocketStrategies: RSocketStrategies?, rSocketProps: RSocketProperties): Mono<RSocketRequester> {
        return RSocketRequester.builder()
                .rsocketStrategies(rSocketStrategies)
                .connectWebSocket(getURI(rSocketProps))
    }

    private fun getURI(rSocketProps: RSocketProperties): URI {
        return URI.create(String.format("ws://localhost:%d%s",
                port, rSocketProps.server.mappingPath))
    }
}