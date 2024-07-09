import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((out) => (
    out.map((info) => ({
      status: info.status,
      value: info.value ? info.value : String(info.reason),
    }))
  ));
}
