import React from "react";

const Card = (props) => {
  return ( <
    div className = "cardRow" > {
      " "
    } {
      props.data.map((item, index) => {
        return ( <
          div className = "col"
          key = {
            index
          } >
          <
          div className = "card mb-3 text-light bg-dark"
          style = {
            {
              width: "18rem",
            }
          } >
          <
          img src = "https://placekitten.com/512"
          className = "card-img-top" / >
          <
          div className = "card-body" >
          <
          h5 className = "card-title" > {
            item.name
          } < /h5>{" "} <
          p className = "card-text" > "Planet info should be here" < /p>{" "} <
          a href = "#"
          className = "btn btn-primary" > {
            " "
          }
          "Learn more" {
            " "
          } <
          /a>{" "} < /
          div > {
            " "
          } <
          /div>{" "} < /
          div >
        );
      })
    } {
      " "
    } <
    /div>
  );
};

export {
  Card
};