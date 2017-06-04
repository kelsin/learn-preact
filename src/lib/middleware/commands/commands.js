export const slap = (action, target) => {
    const newAction = { ...action };
    newAction.messageType = 'COMMAND';
    newAction.body = `slapped ${target} with a reasonably-sized trout.`;
    return newAction;
};
