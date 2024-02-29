import HeadingText from "@/components/HeadingText";
import Page from "@/components/Page";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <Page>
      <HeadingText>Sign Up Your Account</HeadingText>
      <SignUpForm />
    </Page>
  );
}

export default SignUpPage;
