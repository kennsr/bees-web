import { classes } from "@/constants/class.const";
import { REGISTRATION_FORM_LINK } from "@/constants/links.const";
import { formatCurrency } from "@/utils/format-currency";
import { CheckCircle } from "lucide-react";

interface ClassDetailProps {
  params: { classId?: string };
}

async function ClassDetail({ params }: ClassDetailProps) {
  const { classId } = params;
  const classData = classes.find((classItem) => classItem.id === classId);

  if (!classData) {
    return (
      <div className="flex h-full min-h-screen w-full items-center justify-center">
        <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-red-600">Class Not Found</h2>
          <p className="mt-4">
            The class you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col p-4 md:p-8">
      {/* Header Section */}
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg md:p-8 dark:bg-gray-800">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {classData.name}
          </h1>

          {/* Price section */}
          <div className="mb-6">
            {classData.price.promo ? (
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[var(--foreground)] dark:text-[var(--foreground)]">
                  {formatCurrency(classData.price.promo)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatCurrency(classData.price.base)}
                </span>
                <span className="rounded-full bg-[var(--foreground)]/10 px-2 py-1 text-xs font-medium text-[var(--foreground)] dark:bg-[var(--foreground)]/10 dark:text-[var(--foreground)]">
                  Special Offer
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {formatCurrency(classData.price.base)}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert mb-8 max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {classData.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              What You&apos;ll Get
            </h3>
            <ul className="space-y-3">
              {classData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-[var(--foreground)] dark:text-[var(--foreground)]" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href={REGISTRATION_FORM_LINK}
              target="_blank"
              className="w-full cursor-pointer rounded-lg bg-[var(--foreground)]/90 px-4 py-3 font-medium text-white transition-colors hover:bg-[var(--foreground)]/60 dark:bg-[var(--foreground)]/90 dark:hover:bg-[var(--foreground)]/20"
            >
              Enroll Now
            </a>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {classData.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
