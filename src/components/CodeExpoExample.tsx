export default function CodeExpoExample() {

    const containerStyles = {
        overflow: 'hidden',
        background: '#fbfcfd',
        border: '1px solid var(--color-border)', // Note: This uses a CSS variable, which works but its definition must be available in a global or imported CSS file.
        borderRadius: '4px',
        height: '505px',
        width: '100%',
    };

    return (
        <section id="intro" className="wrapper style2 special">
            <div className="inner">
                <header className="major">
                    <h2>Example</h2>
                </header>
                <section>

                    <div data-snack-id="@daniloramirezcr/zenuiexample" data-snack-platform="android"
                         data-snack-preview="true" data-snack-theme="light"
                         style={containerStyles}></div>
                    <script async src="https://snack.expo.dev/embed.js"></script>
                </section>
            </div>
        </section>
    );
}