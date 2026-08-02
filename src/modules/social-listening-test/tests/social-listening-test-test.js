/**
 * SocialListeningTest Test
 */

import createSocialListeningTest
from "../index.js";



const module =
    createSocialListeningTest();



console.log(
    module.execute({
        test:true
    })
);