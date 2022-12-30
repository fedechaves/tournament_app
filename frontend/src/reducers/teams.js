import Team from '../models/Team'
export const teams = (state = [
    new Team('wildcats', null), 
    new Team('Yankees', null),
    new Team('Cubs', null),
    new Team('Stealers', null)
], action) => {
    return state
}