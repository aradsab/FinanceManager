import MonthlyBudget from "./MonthlyBudget";
import AmountSpent from "./AmountSpent";
import {Component} from "react";
import NavBar from "./NavBar";

export default function Suggestion(){
    return (
        <div>
            <NavBar />
            <MonthlyBudget />
            <AmountSpent />
        </div>
    )
}
