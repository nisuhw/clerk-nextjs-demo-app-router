import { SignIn } from "@clerk/nextjs";
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('Index');
  return (
    <div className="flex justify-center py-24">
      <span>{t('title')}</span>
      <SignIn />
    </div>
  );
}
