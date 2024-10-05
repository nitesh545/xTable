import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const data = [
    {date: "2022-09-01", views: 100, article: "Article 1"},
    {date: "2023-09-01", views: 100, article: "Article 1"},
    {date: "2023-09-02", views: 150, article: "Article 2"},
    {date: "2023-09-02", views: 120, article: "Article 3"},
    {date: "2020-09-03", views: 200, article: "Article 4"}
]

export default function App() {
    const [tableContent, setTableContent] = useState(data);

    const handleClickSortByDate = () => {
        setTableContent([...tableContent.sort((a, b) => new Date(b.date) - new Date(a.date))]);
    }

    const handleClickSortByViews = () => {
        setTableContent([...tableContent.sort((a, b) => b.views - a.views)]);
    }

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={() => {handleClickSortByDate()}}>Sort by Date</button>
            <button onClick={()=>{handleClickSortByViews()}}>Sort by Views</button>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                <tbody>
                {
                    tableContent.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.views}</td>
                            <td>{item.article}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}
