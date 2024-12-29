## job site with React

<iframe src="https://player.vimeo.com/video/1042746371?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="job-site-react"></iframe>

Feature ⭐ :

- Modren Design 🎨
- Job Listing
- Add New Job ➕
- Delete Job ✅
- Add Company Details 📝
- Fast Loadiing Components ⚡
- Loding Spinner when Fetching Data

> [!IMPORTANT]
> online version will not add or delete cz the backend json serever dosen't allawo it you need to self host the site or change the env api to your api

**to-do**

- [ ] add login
- [ ] add dark theme

#### how to make add and delete works locally 👇 ?

- download the project

```bash
git clone https://github.com/d7manDev/react-job
```

- download json server

```bash
npm i json-server
```

- run the db.json file via json-server

```bash
npx json-server db.json
```

- change the VITE_BACKEND value in env.local file to json server url running locally

- run the project

```bash
npm run dev
```
