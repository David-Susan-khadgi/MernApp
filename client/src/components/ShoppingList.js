import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import propTypes from 'prop-types'; // P to small p

class ShoppingList extends Component{

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = (id) => {
  this.props.deleteItem(id);
  }
  
  render(){
    const { items } = this.props.item;
    return(
      <Container>  
        <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({_id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>

                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={ this.onDeleteClick.bind(this,_id)}
                  >
                    &times;
                  </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      
      </Container>
    );
  }
}

ShoppingList.propTypes = {// P to small p
 getItems: propTypes.func.isRequired,// P to small p
 item: propTypes.object.isRequired// P to small p
}

const mapStateToProps = (state)=>  ({
//it's written item because that's the name we gave in root reducers i.e reducers/index.js
item: state.item

});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);