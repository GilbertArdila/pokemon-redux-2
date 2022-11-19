export const prefix = (store) => (next) => (action) =>{
    const prefixed = action.action.payload.map((pokemon) => ({
        ...pokemon,
        name: 'Nombre: ' + pokemon.name
    }));

    const updateAction = {
        ...action,
        action: {...action.action, payload:prefixed}
    };

    next(updateAction);

};