import docs from "../../json/docs.json";
import Scroll from "../../lib/Scroll.ts";

type DocSingleContentProps = {
    category: string;
}

export default function DocSingleContent({category}: DocSingleContentProps) {
    const docData = docs.filter(d => d.category === category);

    return (
        <>
            {
                docData.map((doc, index) => (
                    <li
                        onClick={() => {
                            Scroll(doc.title!.toLowerCase().replace(/\s+/g, '-'));
                        }}
                        key={`content_single_item_navigation_${index}`}
                        className={'item element'}>
                        {doc.title}

                    </li>
                ))
            }
        </>
    );
}