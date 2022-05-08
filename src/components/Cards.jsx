/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {Grid, Typography } from '@mui/material';
import './cards.css';



const Cards = ({ recipes }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipes;

    return (
        <>

            <div className='box' col={4} sm={4}>
                <Grid className='resp' style={{ display: "flex" }}>
                    <div className='details' style={{ margin: 15 }}>

                        <Typography style={{ backgroundColor: "white" }} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <a href={"https://www.themealdb.com/meal/" + idMeal}>
                                <img style={{ width: "20vw", height: "30vh" }}
                                    src={strMealThumb}
                                    alt={strMeal}
                                /></a>
                        </Typography>
                        <Typography className="title-and-button">
                            <h6>Category : {strCategory} <br></br> Dish name : <span style={{ color: "red" }}> {strMeal}</span></h6>

                            <a href={"https://www.themealdb.com/meal/" + idMeal}><button className="button">More Details</button></a>
                        </Typography>
                    </div>
                </Grid>
            </div>
               </>
    )
};

export default Cards;
