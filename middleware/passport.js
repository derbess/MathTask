const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models/index');
const log = require('../utils/log');

const User = require('../models/User')(db.sequelize, db.Sequelize, "sdb");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('Authorization');
opts.secretOrKey = 'key';

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log("pasport", jwt_payload)

        User.findOne({
            where: {id: jwt_payload.id}
        })
            .then(user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => log.err(err));
    }));
};
