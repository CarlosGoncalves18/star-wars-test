export default function NotFound() {
    return (
        <main>
            <div className="not-found">
                <h1 className="not-found__error-code">400</h1>
                <h2 className="not-found__error-text">Not found</h2>
                <p className="not-found__error-explanation">
                    This page has moved or no longer exists.
                </p>
            </div>
        </main>
    );
}
