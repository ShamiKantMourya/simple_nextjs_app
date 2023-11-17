const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};
interface Params {
  params: { name: string };
}

async function Name({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <div>
      <div>
        <h2>Personal Info</h2>
        <h3>Age: {age?.age}</h3>
        <h3>Gender: {gender?.gender}</h3>
        <h3>Country: {country?.country[0]?.country_id}</h3>
      </div>
    </div>
  );
}

export default Name;
