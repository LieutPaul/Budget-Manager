import React from "react"
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = React.createContext();

/* Schemas: 
Budget : {
    id: ,
    name: ,
    max: 
}

Expense: {
    id: ,
    budgetID: ,
    amount: ,
    description: 

}
*/ 

export function useBudgets(){
    return React.useContext(BudgetsContext);
}

export const BudgetsProvider = ({children}) =>{
    const [budgets,setBudgets] = useLocalStorage("budgets",[]);
    const [expenses,setExpenses] = useLocalStorage("expenses",[]);
    
    function getBudgetExpenses(budgetID){
        for(var i=0;i<expenses.length;i++){
            if(expenses.budgetID === budgetID){
                return expenses[i];
            }
        }
    }

    function addExpense({description,amount,budgetID}){
        setExpenses((prevExpenses)=>{
            return ([...prevExpenses, {id:uuidV4(), description,amount,budgetID}])
        })
    }

    function addBudget({name,max}){
        setBudgets((prevBudgets)=>{
            if(prevBudgets.find(budget => budget.name===name)){ //Checking if a budget with the same name already exists
                return prevBudgets;
            }
            return ([...prevBudgets, {id:uuidV4(), name, max}])
        })
    }

    function deleteBudget({id}){
        setBudgets((prevBudgets)=>{
            return prevBudgets.filter(budget => budget.id !== id);
        })
    }

    function deleteExpense({id}){
        setExpenses((prevExpenses)=>{
            return prevExpenses.filter(expense => expense.id !== id);
        })
    }

    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>
            {children}
        </BudgetsContext.Provider>
    );
}