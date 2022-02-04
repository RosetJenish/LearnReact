import React from "react";
class Square extends React.Component {
  render() {
    return (
    <button className="Square"> 
    <h1>All is well</h1>
    {this.props.value}
    </button>
    );
  }
}
/*export default Square;*/

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  export {Square, ShoppingList}