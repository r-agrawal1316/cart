import React from "react";

class CartItem extends React.Component{
    increaseQuantity = () =>{
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQuantity = () =>{
        const {qty} = this.state;
        if(qty===0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render(){
        console.log('this.props', this.props);
        const { title , price , qty } = this.props.product; 
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                          alt="increase"
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                          onClick={this.increaseQuantity} 
                        />
                        <img 
                          alt="decrease" 
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                          onClick={this.decreaseQuantity}  
                        />
                        <img 
                          alt="delete" 
                          className="action-icons" 
                          src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                        />
                    </div>                   
                    
                </div>

            </div>
        );
    }
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
export default CartItem;