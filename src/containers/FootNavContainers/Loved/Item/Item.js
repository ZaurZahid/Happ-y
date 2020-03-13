import React from "react";
import { cutText } from "../../../../components/UI/SomeFuncs";
import classNamees from "./Item.css";

const Item = props => {
//   console.log(props);
  var contentofItem;
  if(props.item.img_url){
    contentofItem = (<img src={props.item.img_url}/>);
  }else if(props.item.img){
    contentofItem = (<img src={props.item.img} />);
  }else if(props.item.picture){
    contentofItem =( <img src={props.item.picture }/>);
  }else{
    contentofItem = (<p>{cutText(props.item.quote,45)}</p>);
  }
  let attachedClassContentItem = [classNamees.Item];
  if (props.blur) {
    attachedClassContentItem = [classNamees.Item, classNamees.ItemBlur];
  }
  return ( 
      <div className={attachedClassContentItem.join(' ')}>
        <div className={classNamees.ContentItem}>
          <i onClick={props.updateHeartedBest} className={props.item.heart?"fa fa-heart":"fa fa-spinner fa-pulse"}></i>
         <div onClick={props.gotoPageItemFunc} style={{height:'100%'}}>{contentofItem}</div> 
        </div> 
    </div>
  );
};

export default Item;
