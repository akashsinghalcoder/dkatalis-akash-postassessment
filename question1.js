import React from 'react';

const Entity = [
    {entityId : 1, entityName: "entity1", price:200, status:0},
    {entityId : 2, entityName: "entity2", price:200, status:1},
    {entityId : 3, entityName: "entity3", price:200, status:2}
  
];

export default class EntityList extends React.Component {
  constructor(props) {
    super(props);
  }
  renderEntityList() {
    const renderedEntities = [];
    for (let i = 0 ; i < Entity.length ; i++) {
      const currentEntity = (
        <div key={i}>
          <span>{Entity[i].entityName}</span>
          <span>{Entity[i].status}</span>
          <span>{price}</span>
        </div>
      );
      renderedEntity.push(currentEntity);
    }
    return renderedEntities;
  }

  


  render() {
    return (
      <div >
          {this.renderEntityList()}
          </div>
        
    );
  }
}
