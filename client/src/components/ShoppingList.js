import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component{

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = () => {
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

ShoppingList.PropTypes = {
 getItems: PropTypes.func.isRequired,
 item: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>  ({
//it's written item because that's the name we gave in root reducers i.e reducers/index.js
item: state.item

});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);