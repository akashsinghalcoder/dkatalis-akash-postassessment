import React from 'react';

const Entity = [
    {entityId : 1, entityName: "entity1", price:200, status:0},
    {entityId : 2, entityName: "entity2", price:200, status:1},
    {entityId : 3, entityName: "entity3", price:200, status:2}
  
];

export default class EntityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({Entity});
  }
  renderEntityList() {
    const renderedEntities = [];
    for (let i = 0 ; i < this.state.Entity.length ; i++) {
      const currentEntity = (
        <div key={i}>
          <span>{Entity[i].entityName}</span>
          <span>{Entity[i].status}</span>
          <span>Color indicator : {Entity[i].status === 0 ? "Red" : Entity[i].status === 1 ? "Orange" : "Green"} </span>
          <span>{price}</span>
          <button onClick={() => this.deleteEntity(i)}>delete</button>
        </div>
      );
      renderedEntity.push(currentEntity);
    }
    return renderedEntities;
  }

  deleteEntity = (indexOfEntity) => {
      const currentEntities = this.state.Entity;
      currentEntities.splice(1, indexOfEntity);
      this.setState({Entity: currentEntities});
  }

  


  render() {
    return (
      <div >
          {this.renderEntityList()}
          </div>
        
    );
  }
}