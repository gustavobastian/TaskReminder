# TaskReminder

Simple ionic app that shows scheduled dosis of medicine for 2 patients.

## Resourses used

* Icon & Splash image: png by me.

## build

Install dependencies:

```bash
npm install
```

In order to generate, copy the images inside /resourses and run (it will use only the icon.png image for both splash and icon):

```bash
npx capacitor-assets generate
```

Generate the app:

```bash
npm run build
```

Add capacitor android plugin, build android and run in android Studio:

```bash
ionic cap add android
ionic cap build android
ionic cap run android
```

## Captures

### Main Page

![img](./documentation/images/main-page.png)

### Menu

![img](./documentation/images/menu-view.png)

### One client

![img](./documentation/images/selection-view.png)
