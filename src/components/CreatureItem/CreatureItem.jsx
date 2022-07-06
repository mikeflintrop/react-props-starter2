function CreatureItem({creature}) {

    return (
        <>
            <li key={creature.id}>{creature.name} is from {creature.origin}
            {/* <span> {creature.origin === 'USA' && ' USA! USA! USA!'} </span> */}
            <span> {creature.origin === 'USA' ? ' USA! USA! USA!' : '...'}</span>
            </li>
        </>
    )
};

export default CreatureItem;