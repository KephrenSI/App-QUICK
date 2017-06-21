/* hepl-dw/vitfoud-client
 *
 * /src/js/components/comment/form.js - Comment Component : form component
 *
 * coded by leny@flatLand!
 * started at 23/04/2017
 */

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CommentForm extends Component {
    constructor( oProps ) {
        super( oProps );

        this.state = {
            "hasError": false,
            "name": "",
            "content": "",
            "rating": 3,
        };
    }

    handleSubmit( oEvent ) {
        oEvent.preventDefault();

        let bHasError = false;

        bHasError = bHasError || ( !this.state.name || this.state.name.length < 4 || this.state.name.length > 20 );

        bHasError = bHasError || ( !this.state.content || this.state.content.length < 4 || this.state.name.length > 140 );

        bHasError = bHasError || ( isNaN( this.state.rating ) || this.state.rating < 0 || this.state.rating > 5 );

        this.setState( {
            "hasError": bHasError,
        } );

        if ( !bHasError ) {
            this.props.onSubmit && this.props.onSubmit( {
                "name": this.state.name,
                "comment": this.state.content,
                "rating": this.state.rating,
            } );
        }
    }

    handleNameChange( oEvent ) {
        this.setState( { "name": oEvent.target.value } );
    }

    handleRatingChange( oEvent ) {
        this.setState( { "rating": oEvent.target.value } );
    }

    handleContentChange( oEvent ) {
        this.setState( { "content": oEvent.target.value } );
    }

    render() {
        let $error;

        if ( this.state.hasError ) {
            $error = (
                <div>{ "Veuillez remplir tous les champs !" }</div>
            );
        }

        return (
            <form className={ "formulaire" } onSubmit={ this.handleSubmit.bind( this ) }>
                { $error }
                <div className={ "formulaire__champs" }>
                    <label className={ "formulaire__label" } htmlFor="comment-form-name">{ "User Name / Pseudo" }</label>
                    <input className={ "formulaire__input" } type="text" id="comment-form-name" onChange={ this.handleNameChange.bind( this ) } placeholder={ "Francky45" } value={ this.state.name } />
                </div>
                <div className={ "formulaire__options" }>
                    <label className={ "formulaire__label" } htmlFor="comment-form-rating">{ "Évaluation" }</label>
                    <div className={ "formulaire__like" } id="comment-form-rating" value={ this.state.rating } onChange={ this.handleRatingChange.bind( this ) }>
                        <input type="radio" name="rating" id="st5" value={ 5 } />
                        <label htmlFor="st5"><img className={ "formulaire__likeIcon" } src={"./assets/img/likeColor.png"}/></label>

                        <input type="radio" name="rating" id="st4" value={ 4 } />
                        <label htmlFor="st4"><img className={ "formulaire__likeIcon" } src={"./assets/img/likeColor.png"}/></label>

                        <input type="radio" name="rating" id="st3" value={ 3 } />
                        <label htmlFor="st3"><img className={ "formulaire__likeIcon" } src={"./assets/img/likeColor.png"}/></label>

                        <input type="radio" name="rating" id="st2" value={ 2 } />
                        <label htmlFor="st2"><img className={ "formulaire__likeIcon" } src={"./assets/img/likeColor.png"}/></label>
                        
                        <input type="radio" name="rating" id="st1" value={ 1 } />
                        <label htmlFor="st1"><img className={ "formulaire__likeIcon" } src={"./assets/img/likeColor.png"}/></label>

                        
                    </div>
                </div>
                <div className={ "formulaire__txt" }>
                    <label className={ "formulaire__label formulaire__labelTextarea" } htmlFor="comment-form-content">{ "Commentaire" }</label>
                    <textarea className={ "formulaire__textarea" } rows="1" cols="50" id="comment-form-content" value={ this.state.content } onChange={ this.handleContentChange.bind( this ) } placeholder={ "Votre commentaire..." } />
                    <button className={ "formulaire__button" } type="submit">{ "Publier" }</button>
                </div>
            </form>
        );
    }
}

CommentForm.propTypes = {
    "onSubmit": PropTypes.func,
};
