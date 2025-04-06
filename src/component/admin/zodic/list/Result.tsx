import { HelperChild } from "./helper";


export class Result extends HelperChild {


    render() {
        return <div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">description</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">

                    {
                        this.p.state.list.map((value, index) => {
                            return <tr>
                                <th >{index + 1}</th>
                                <td>{value.title}</td>
                                <td>{value.description}</td>
                                <td>{value.created_date}</td>
                            </tr>
                        })
                    }



                </tbody>
            </table>
        </div>
    }
}