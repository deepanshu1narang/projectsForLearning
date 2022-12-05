import React, {useState} from 'react';
import Plot from 'react-plotly.js';

export default function Graph() {
    const annotations = []

    const [detail, setDetail] = useState("");

    const televisionTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'orange'},
        name : "Television",
        // result : result()
    }
    console.log(1);
    
    const newspaperTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'blue'},
        name : "Newspaper",
    }
    
    const internetTrace = {
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'black'},
        name : "Radio"
    }
    
    const radioTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'green'},
        name : "Internet",
    }
    // debugger;
    
    const televisionTraceEndPoints = {
        showlegend : false,
        x : [televisionTrace.x[0], televisionTrace.x[televisionTrace.x.length - 1]],
        y : [televisionTrace.y[0], televisionTrace.y[televisionTrace.y.length - 1]],
        text : [`NewsPAper ${televisionTrace.y[0]}%`, `${televisionTrace.y[televisionTrace.y.length - 1]}%`],
        mode : "markers",
        marker : {color : televisionTrace.line.color}
    }

    const newspaperTraceEndPoints = {
        showlegend : false,
        x : [newspaperTrace.x[0], newspaperTrace.x[newspaperTrace.x.length - 1]],
        y : [newspaperTrace.y[0], newspaperTrace.y[newspaperTrace.y.length - 1]],
        text : [`Television ${newspaperTrace.y[0]}%`, `${newspaperTrace.y[newspaperTrace.y.length - 1]}%`],
        mode : "markers",
        marker : {color : newspaperTrace.line.color}
    }

    const radioTraceEndPoints = {
        showlegend : false,
        x : [radioTrace.x[0], radioTrace.x[radioTrace.x.length - 1]],
        y : [radioTrace.y[0], radioTrace.y[radioTrace.y.length - 1]],
        text : [`Radio ${radioTrace.y[0]}%`, `${radioTrace.y[radioTrace.y.length - 1]}%`],
        mode : "markers",
        marker : {color : radioTrace.line.color}
    }

    const internetTraceEndPoints = {
        showlegend : false,
        x : [internetTrace.x[0], internetTrace.x[internetTrace.x.length - 1]],
        y : [internetTrace.y[0], internetTrace.y[internetTrace.y.length - 1]],
        text : [`Internet ${internetTrace.y[0]}%`, `${internetTrace.y[internetTrace.y.length - 1]}%`],
        mode : "markers",
        marker : {color : internetTrace.line.color}
    }

    const pointDetail = (e) =>{
        setDetail(`In the year ${e.points[0].x}, ${e.points[0].data.name} was used as the ${e.points[0].y}% of main sources of news`);
    }

    setTimeout(() => {
        setDetail("")
    },10000);

  return (
    <React.Fragment>
        <h3 style={{margin : "0px"}}>Click on any button to know its detail</h3>
        <Plot
            data={[televisionTrace, newspaperTrace, radioTrace, internetTrace, televisionTraceEndPoints, newspaperTraceEndPoints, internetTraceEndPoints, radioTraceEndPoints]}
            labels = {['Television', 'Newspaper', 'Internet', 'Radio']}
            scrollZoom = {true}
            layout={
                {
                    showlegend : true,
                    width : "1000",
                    height: "700", 
                    title : 'Variation of Main sources of News over the years', 
                    scale : 1,
                    yaxis : {showgrid: true, zeroline: true, showline: false, showticklabels: true, title : "percentage"},
                    xaxis : {showgrid: false, zeroline: false, showline: false, showticklabels: true, title : "year"},
                }
            }
            onClick={pointDetail}
            annotations={annotations}           
        />
        {detail && <p>{detail}</p>}
    </React.Fragment>
  )
}
