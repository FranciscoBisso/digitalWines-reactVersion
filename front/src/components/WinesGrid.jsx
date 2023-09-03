export default function WinesGrid({wines}) {
    return (
        <>
            <div>Soy el WinesGrid</div>;
            {wines.map((wine) => (
                <div key={wine.id}>
                    <img src={wine.imagen} />
                </div>
            ))}
        </>
    );
}
