import {
    ControlsComponent,
    DiagramComponent, DiagramPaletteComponent,
    MiniviewComponent,
    DiagramProvider,
    ExportControlsComponent
} from "@visuallyjs/browser-ui-react";
import {
    FLOWCHART_SHAPES, BASIC_SHAPES,
    CONNECTOR_TYPE_ORTHOGONAL,
    FlowchartBasicEdgeMappings
} from "@visuallyjs/browser-ui"
import FlowchartInspector from "./Inspector.jsx";
import {useEffect, useRef} from "react";

const imageDimensions = [
    {width:3000}, {width:1200}, {width:800}
]

function App({url, hidePalette, hideInspector}) {

    const d = useRef(null)

    const diagramOptions = {
        zoomToFit: true,
        shapes:[FLOWCHART_SHAPES, BASIC_SHAPES],
        edges: {
            avoidVertices: true,
            propertyMappings: FlowchartBasicEdgeMappings(),
            allowUnattached: true,
            connector: {
                type: CONNECTOR_TYPE_ORTHOGONAL,
                options: {
                    cornerRadius: 10
                }
            },
            showLabels: true
        },
        cells: {
            rotationStops: 4,
        },
        grid: {
            size: {
                width: 50,
                height: 50
            }
        },
        lasso: true,
        beforeStartConnect: () => {
            return {markers: "targetArrow"}
        }
    }

    useEffect(() => {
        window.d = d.current
    })

    return <div className="vjs-flowchart">
        <DiagramProvider>
            {hidePalette !== true && <div className="vjs-flowchart-palette">
                <DiagramPaletteComponent/>
            </div>}
            <div className="vjs-flowchart-canvas">
                <DiagramComponent options={diagramOptions} url={url} ref={d}>
                    <ControlsComponent/>
                    <ExportControlsComponent imageOptions={{dimensions:imageDimensions}}/>
                    <MiniviewComponent className="vjs-flowchart-miniview"/>
                </DiagramComponent>
            </div>
            {hideInspector !== true && <FlowchartInspector/>}

        </DiagramProvider>
    </div>
}

export default App
