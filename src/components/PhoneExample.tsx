

export default function PhoneExample(){

    const ratioSize = 9/18;

    const phoneStyles = {
        width: '360px',
        height: `${360/ratioSize}px`,
        border: '1px solid #ccc',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        margin: '0 auto',
    };

    return (
        <section id="phone_example" className="wrapper special">
            <header className="major">
                <h2>
                    Example View
                </h2>
            </header>
            <div className="phone-container">
                <iframe style={phoneStyles} src="phone/index.html">Your browser does not support iframe usage</iframe>
            </div>
        </section>
    );
}