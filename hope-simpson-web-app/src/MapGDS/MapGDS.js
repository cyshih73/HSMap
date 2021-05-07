import React from 'react';
import './MapGDS.css';

const GDS_DATA=[
  {
    title:"Overview",
    url:"https://datastudio.google.com/embed/reporting/e70cf709-d828-44b7-a1d8-8023088dff5d/page/TxgjB",
    subTab: false
  },
  {
    title:"Four Zones Concept",
    url:"https://datastudio.google.com/embed/reporting/e70cf709-d828-44b7-a1d8-8023088dff5d/page/cm8pB",
    subTab: false
  },
  {
    title:"Play with GDS",
    url:"",
    subTab: true,
    subTabInfo:[
      {
        title: "Four Zones",
        url: "https://datastudio.google.com/embed/reporting/e70cf709-d828-44b7-a1d8-8023088dff5d/page/dF9pB"
      },
      {
        title: "Overlap",
        url: "https://datastudio.google.com/embed/reporting/e70cf709-d828-44b7-a1d8-8023088dff5d/page/sh18B"
      },
      {
        title: "Side by side",
        url: "https://datastudio.google.com/embed/reporting/e70cf709-d828-44b7-a1d8-8023088dff5d/page/uJ18B"
      }
    ]
  },
];


class MapGDS extends React.Component{
  constructor(props) {
    super(props);
    this.state = { view: 0 , subView: 1};
  }

  handleChangeView(viewId, event) { 
    event.preventDefault();
    this.setState({ ...this.state, view: viewId});
  }

  pressTab=(index)=>{
    this.setState({ ...this.state, view: index});
  }
  pressSubTab=(index)=>{
    this.setState({ ...this.state, subView: index});
  }
  render() {
    const showClass={
      display:'initial'
    }
    const hideClass={
      position:'absolute',
      top:'-5000px',
      left:'-5000px'
    }
    return (
      <div className="bodyMarginTop">
        <div className={"customTab"}>
          {
            GDS_DATA.map((data, idx) => {
              return <div className={(idx==this.state.view)?"tabPressed":"tabUnPressed"} onClick={(e)=>{this.pressTab(idx)}}><span>{data.title}</span></div>
            })
          }
        </div>
        <div className={"iframeTab"}>
          {
            GDS_DATA.map((data,index)=>{
              if(data.subTab){
                 return (
                     <div style={this.state.view==index?showClass:hideClass}>
                       <div className="customTab2">
                         {
                           data.subTabInfo.map((subTab,myIndex)=>{
                             return <div className={(myIndex==this.state.subView)?"tabPressed2":"tabUnPressed2"} onClick={(e)=>{this.pressSubTab(myIndex)}}>{subTab.title}</div>
                           })
                         }
                       </div>
                       <div className={"subTabIframes"}>
                         {
                           data.subTabInfo.map((subTab,myIndex)=>{
                             return <iframe scrolling="yes" frameBorder="0" title="COVID-19 Map with GDS"
                                            src={ subTab.url }
                                            allowFullScreen style={this.state.subView==myIndex?showClass:hideClass}/>
                           })
                         }
                       </div>
                     </div>
                 )

              }
              return <iframe scrolling="yes" frameBorder="0" title="COVID-19 Map with GDS"
                             src={ data.url }
                             allowFullScreen style={this.state.view==index?showClass:hideClass}/>
            })
          }
        </div>
      </div>
    );
  }
}


export default MapGDS;
