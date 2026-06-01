
import { EdgeTypePickerComponent, InspectorComponent, ColorPickerComponent } from "@visuallyjs/browser-ui-react"
import { Node, Edge } from "@visuallyjs/browser-ui"
import {
    LINE_WIDTHS,
    PROPERTY_COLOR,
    PROPERTY_FILL,
    PROPERTY_LABEL, PROPERTY_LINE_STYLE, PROPERTY_LINE_WIDTH, PROPERTY_MARKERS,
    PROPERTY_OUTLINE,
    PROPERTY_OUTLINE_WIDTH, PROPERTY_TEXT
} from "./constants.ts";

export default function FlowchartInspector() {

    return <InspectorComponent className="vjs-flowchart-inspector">
        {(current) => <>

            { current?.objectType === Node.objectType && <>
                {current?.type !== "label" && <><div className="vjs-inspector-section">
                    <div>Label</div>
                    <input type="text" vjs-att={PROPERTY_LABEL} vjs-focus="true"/>
                </div>
                    <div className="vjs-inspector-section">
                        <div>Fill Color</div>
                        <ColorPickerComponent  propertyName={PROPERTY_FILL}/>
                    </div>

                    <div className="vjs-inspector-section">
                        <div>Outline Color</div>
                        <ColorPickerComponent propertyName={PROPERTY_OUTLINE}/>
                    </div>

                    <div className="vjs-inspector-section">
                        <div>Outline width</div>
                        <select vjs-att={PROPERTY_OUTLINE_WIDTH} vjs-datatype="integer">
                            {LINE_WIDTHS.map (lw => <option key={lw} value={lw}>{lw}</option>)}
                        </select>
                    </div>
                </>}

                {current?.type === "label" && <>
                    <div className="vjs-inspector-section">
                        <div>Text</div>
                        <input type="text" vjs-att={PROPERTY_TEXT} vjs-focus="true"/>
                        <label><input type="checkbox" vjs-att="scaled" vjs-default="true"/><span>Scaled</span></label>
                    </div>
                    <div className="vjs-inspector-section">
                        <div>Background Color</div>
                        <ColorPickerComponent  propertyName="fill"/>
                    </div>
                </>}

                <div className="vjs-inspector-section">
                    <div>Text Color</div>
                    <ColorPickerComponent propertyName={PROPERTY_COLOR}/>
                </div>
            </>
            }

            {current?.objectType === Edge.objectType && <>
                <div className="vjs-inspector-section">
                    <div>Label</div>
                    <input type="text" vjs-att={PROPERTY_LABEL}/>
                </div>
                <div className="vjs-inspector-section">
                    <div>Line style</div>
                    <EdgeTypePickerComponent propertyName={PROPERTY_LINE_STYLE}/>
                </div>
                <div className="vjs-inspector-section">
                    <div>Markers</div>
                    <EdgeTypePickerComponent propertyName={PROPERTY_MARKERS}/>
                </div>
                <div className="vjs-inspector-section">
                    <div>Line width</div>
                    <select vjs-att={PROPERTY_LINE_WIDTH} vjs-datatype="integer">
                        {LINE_WIDTHS.map (lw => <option key={lw} value={lw}>{lw}</option>)}
                    </select>
                </div>
            </>
            }

        </>}

    </InspectorComponent>
}
