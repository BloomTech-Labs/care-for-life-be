const db = require('../data/db-config.js');

module.exports = {
	findCommunityDetails
};


async function findCommunityDetails(id) {
	const user = await findById(id)
	if (user == undefined) {
		return
	} else {
		return db('community as c')
			.where('c.id', id)
			.select('c.id', 'c.community')
			.first()
			.then(community => {
				return db('zone as z')
					.where('z.community_id', community.id)
					.select('z.id', 'z.zone_letter')
					.then(zone_info => {
						return db('family as f')
							.where('f.zone_id', zone_info.id)
							.select('f.family_name')
							.then(family_info => {
								return {
									...community,
									...zone_info,
									...family_info
								}
							})
					})
			})
	}
}
