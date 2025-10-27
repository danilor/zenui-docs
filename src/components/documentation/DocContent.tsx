import type {orderProps} from "../../models/OrderProps.model.ts";
import DocSingleContent from "./DocSingleContent.tsx";

type docContentProps = {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    order: any
}

export default function DocContent( {order}: docContentProps ) {



    return (
        <section id={'documentation'} className={'wrapper'}>
            <div className={'inner'}>
                <header className="major">
                    <h2>Content</h2>
                </header>

                <div className={'table-of-contents'}>

                    {
                        order.map((category: orderProps) => (
                            <div key={category.category + '_content'} className={'single'}>
                                <h4 className={'item header'}>
                                    {category.icon ? (<i className={category.icon}></i>) : (
                                        <i className="zi-codepen"></i>)}
                                    &nbsp;{category.category}</h4>
                                <ul>

                                    <DocSingleContent category={category.category} />

                                </ul>
                            </div>
                        ))
                    }



                </div>

            </div>
        </section>
    );
}