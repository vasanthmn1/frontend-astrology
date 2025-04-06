import { ReactNode } from "react";
import { HelperChild } from "./helper";
import { PageNation } from "../../../page/PageNation";

export class Footer extends HelperChild {




    handlePageChange(pageNumber: number) {
        console.log(pageNumber);

        console.log(this.p.state.page_total_count);

        this.p.action.changeState({ page_no: pageNumber });
        this.p.action.request.load()
    }
    oncl = () => {
        console.log(this.p.state.page_total_count);
    }

    render() {
        console.log(this.p.state.page_total_count);
        console.log(this.props.parent.state.page_total_count);
        return <div onClick={this.oncl}>ss
            <PageNation
                page_limit={this.props.parent.state.page_limit}
                page_no={this.props.parent.state.page_no}
                page_total_count={this.props.parent.state.page_total_count}
                callback={(pageNumber: number) => this.handlePageChange(pageNumber)}
            />
        </div>
    }
}