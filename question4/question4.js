import React from "react";
import EntityList from "./EntityList";
import EntityForm from "./EntityForm";

export default class EntityContainer extends React.Component {


    render() {
        return(
            <div>
                <EntityForm />
                <EntityList />
                
            </div>
        );
    }
}