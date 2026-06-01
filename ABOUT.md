# Flowchart Builder Implementation

This document describes how the Flowchart Builder is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application is built using several core components from `@visuallyjs/browser-ui-react`:

### Core Layout
- **`DiagramProvider`**: Wraps the entire application to provide context and manage the state of the diagram.
- **`DiagramPaletteComponent`**: Displays a palette of shapes that users can drag onto the canvas. It is configured to show `FLOWCHART_SHAPES` and `BASIC_SHAPES`.
- **`DiagramComponent`**: The main canvas area where the diagram is rendered.

### Canvas Enhancements
- **`ControlsComponent`**: Provides standard zoom and pan controls, rendered as children of the `DiagramComponent`.
- **`ExportControlsComponent`**: Handles exporting the diagram to images, with predefined dimensions.
- **`MiniviewComponent`**: Provides a small navigation map of the entire diagram.

### Property Editor
- **`InspectorComponent`**: A context-sensitive panel that allows users to edit properties of the selected node or edge.
- **`ColorPickerComponent`**: Used within the inspector to change fill, outline, and text colors.
- **`EdgeTypePickerComponent`**: Used to select line styles and markers (arrows) for edges.

## Configuration Options

### Diagram Options
The `DiagramComponent` is configured with a `diagramOptions` object:

- **`zoomToFit`**: Set to `true` to automatically fit the content on initial load.
- **`shapes`**: Includes `FLOWCHART_SHAPES` and `BASIC_SHAPES` to provide a wide variety of symbols.
- **`edges`**:
    - `avoidVertices`: `true` - ensures edges route around nodes.
    - `propertyMappings`: Uses `FlowchartBasicEdgeMappings()` for standard edge behavior.
    - `allowUnattached`: `true` - allows edges to exist without being connected to nodes.
    - `connector`: Set to `CONNECTOR_TYPE_ORTHOGONAL` with a `cornerRadius` of 10 for rounded right-angle connections.
    - `showLabels`: `true` - enables labels on edges.
- **`cells`**:
    - `rotationStops`: `4` - restricts rotation to 90-degree increments.
- **`grid`**:
    - `size`: 50x50 grid for alignment.
- **`lasso`**: `true` - enables area selection.
- **`beforeStartConnect`**: Configured to add a `targetArrow` marker by default when creating new connections.

### Inspector Logic
The `FlowchartInspector` uses a render prop pattern with `InspectorComponent` to show different fields based on the selected object type (`Node` or `Edge`):

- **Nodes**: Users can edit the label, fill color, outline color, outline width, and text color. Special handling is provided for "label" type nodes (text blocks).
- **Edges**: Users can edit the label, line style, markers, and line width.

 
## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: The app styles are in `flowchart.css`, which defines the grid structure for the palette, canvas, and inspector, and the look and feel of the app.
