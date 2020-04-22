import type { Container } from "../../Container";

/**
 * Particle connection manager
 */
export class Connecter {
    /**
     * Connecting particles on hover interactivity
     */
    public static connect(container: Container): void {
        const options = container.options;

        if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
            const mousePos = container.interactivity.mouse.position || { x: 0, y: 0 };
            const distance = Math.abs(container.retina.connectModeRadius);

            const query = container.particles.spatialGrid.queryRadius(mousePos, distance);

            let i = 0;
            for (const p1 of query) {
                for (const p2 of query.slice(i + 1)) {
                    const distMax = Math.abs(container.retina.connectModeDistance);
                    const xDiff = Math.abs(p1.position.x - p2.position.x);
                    const yDiff = Math.abs(p1.position.y - p2.position.y);

                    if (xDiff < distMax && yDiff < distMax) {
                        container.canvas.drawConnectLine(p1, p2);
                    }
                }

                ++i;
            }
        }
    }
}
