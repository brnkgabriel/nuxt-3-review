<template>
  <div class="w-100 h-100">
    <!-- <Modal /> -->
    <!-- <Slideover /> -->
    <!-- <Pagination /> -->
    <!-- <Forms /> -->
    <!-- <PageHeadings /> -->
    <!-- <InputGroups /> -->
    <!-- <Login /> -->
    <button @click="signIn">Sign in</button>
    <button @click="signOut">Sign out</button>
    <!-- <HeroSection /> -->
    <!-- <FeatureSection /> -->
    <!-- <CTASection /> -->
    <!-- <Headers /> -->
    <!-- <Banners /> -->
    <!-- <AppShell /> -->
    <!-- <DescriptionList /> -->
    <!-- <SelectMenus /> -->
    <!-- <Navbars /> -->
    <!-- <Avatars /> -->
    <!-- <Dropdowns /> -->
    <!-- <ProductOverviews /> -->
    <!-- <ProductLists /> -->
    <!-- <ProductLists2 /> -->
    <!-- <CategoryPreview /> -->
    <!-- <ShoppingCart /> -->
    <!-- <CategoryFilters /> -->
    <!-- <ProductQuickview /> -->
    <!-- <ProductFeatures /> -->
    <!-- <StoreNavigation /> -->
    <!-- <PromoSections /> -->
    <pre>
      {{credentials}}
    </pre>
  </div>
</template>
<script setup>

const credentials = ref()

const signIn = async () => {

  const email = "brnkgabriel@gmail.com";
  const password = "1234567";
  credentials.value = await signInUser(email, password)
};

const signOut = async () => {
  credentials.value = await signOutUser();
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  font-family: Poppins, "DM Sans";
}
</style>
