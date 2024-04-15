import type { LocalizationResource } from '@clerk/types';

// @ts-ignore
export const idID: LocalizationResource = {
  locale: 'id-ID',
  maintenanceMode:
    'Kami sedang menjalani pemeliharaan, tapi jangan khawatir, ini tidak akan memakan waktu lebih dari beberapa menit.',
  __experimental_formFieldLabel__passkeyName: 'Nama kunci sandi',
  backButton: 'Kembali',
  badge__default: 'Bawaan',
  badge__otherImpersonatorDevice: 'Perangkat peniru identitas lainnya',
  badge__primary: 'Utama',
  badge__requiresAction: 'Membutuhkan tindakan',
  badge__thisDevice: 'Alat ini',
  badge__unverified: 'Tidak diverifikasi',
  badge__userDevice: 'Perangkat pengguna',
  badge__you: 'Anda',
  createOrganization: {
    formButtonSubmit: 'Buat organisasi',
    invitePage: {
      formButtonReset: 'Melewati',
    },
    title: 'Buat organisasi',
  },
  dates: {
    lastDay: "Kemarin pukul {{ date | timeString('id-ID') }}",
    next6Days:
      "{{ date | weekday('id-ID','long') }} pada {{ date | timeString('id-ID') }}",
    nextDay: "Besok pukul {{ date | timeString('id-ID') }}",
    numeric: "{{ date | numeric('id-ID') }}",
    previous6Days:
      "Terakhir {{ date | weekday('id-ID','long') }} pada {{ date | timeString('id-ID') }}",
    sameDay: "Hari ini pukul {{ date | timeString('id-ID') }}",
  },
  dividerText: 'atau',
  footerActionLink__useAnotherMethod: 'Gunakan metode lain',
  footerPageLink__help: 'Membantu',
  footerPageLink__privacy: 'Pribadi',
  footerPageLink__terms: 'Ketentuan',
  formButtonPrimary: 'Melanjutkan',
  formButtonPrimary__verify: 'Memeriksa',
  formFieldAction__forgotPassword: 'Tidak ingat kata sandi?',
  formFieldError__matchingPasswords: 'Kata sandi cocok.',
  formFieldError__notMatchingPasswords: 'Kata sandi tidak cocok.',
  formFieldError__verificationLinkExpired:
    'Tautan verifikasi telah kedaluwarsa. ',
  formFieldHintText__optional: 'Opsional',
  formFieldHintText__slug:
    'Siput adalah ID yang dapat dibaca manusia dan harus unik. ',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Hapus akun',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses:
    'contoh@email.com, contoh2@email.com',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: 'organisasi saya',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations:
    'Aktifkan undangan otomatis untuk domain ini',
  formFieldLabel__backupCode: 'Kode cadangan',
  formFieldLabel__confirmDeletion: 'Konfirmasi',
  formFieldLabel__confirmPassword: 'Konfirmasi sandi',
  formFieldLabel__currentPassword: 'Kata sandi saat ini',
  formFieldLabel__emailAddress: 'Alamat email',
  formFieldLabel__emailAddress_username: 'Alamat email atau username',
  formFieldLabel__emailAddresses: 'Alamat email',
  formFieldLabel__firstName: 'Nama depan',
  formFieldLabel__lastName: 'nama keluarga',
  formFieldLabel__newPassword: 'Kata sandi baru',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending:
    'Hapus undangan dan saran yang tertunda',
  formFieldLabel__organizationDomainEmailAddress: 'Alamat email verifikasi',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Masukkan alamat email di bawah domain ini untuk menerima kode dan memverifikasi domain ini.',
  formFieldLabel__organizationName: 'Nama',
  formFieldLabel__organizationSlug: 'Siput',
  formFieldLabel__passkeyName: 'Nama kunci sandi',
  formFieldLabel__password: 'Kata sandi',
  formFieldLabel__phoneNumber: 'Nomor telepon',
  formFieldLabel__role: 'Peran',
  formFieldLabel__signOutOfOtherSessions: 'Keluar dari semua perangkat lain',
  formFieldLabel__username: 'Nama belakang',
  impersonationFab: {
    action__signOut: 'Keluar',
    title: 'Masuk sebagai {{identifier}}',
  },
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Anggota',
  membershipRole__guestMember: 'Tamu',
  organizationList: {
    action__createOrganization: 'Buat organisasi',
    action__invitationAccept: 'Bergabung',
    action__suggestionsAccept: 'Permintaan untuk bergabung',
    createOrganization: 'Buat Organisasi',
    invitationAcceptedLabel: 'Bergabung',
    subtitle: 'untuk melanjutkan {{applicationName}}',
    suggestionsAcceptedLabel: 'Menunggu persetujuan',
    title: 'Pilih akun',
    titleWithoutPersonal: 'Pilih sebuah organisasi',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Undangan otomatis',
    badge__automaticSuggestion: 'Saran otomatis',
    badge__manualInvitation: 'Tidak ada pendaftaran otomatis',
    badge__unverified: 'Tidak diverifikasi',
    createDomainPage: {
      subtitle: 'Tambahkan domain untuk diverifikasi. ',
      title: 'Tambahkan domain',
    },
    invitePage: {
      detailsTitle__inviteFailed:
        'Undangan tidak dapat dikirim.  {{email_addresses}}.',
      formButtonPrimary__continue: 'Mengirim undangan',
      selectDropdown__role: 'Pilih peran',
      subtitle:
        'Masukkan atau tempel satu atau beberapa alamat email, pisahkan dengan spasi atau koma.',
      successMessage: 'Undangan berhasil dikirim',
      title: 'Undang anggota baru',
    },
    membersPage: {
      action__invite: 'Mengundang',
      activeMembersTab: {
        menuAction__remove: 'Hapus anggota',
        tableHeader__actions: '',
        tableHeader__joined: 'Bergabung',
        tableHeader__role: 'Peran',
        tableHeader__user: 'Pengguna',
      },
      detailsTitle__emptyRow: 'Tidak ada anggota untuk ditampilkan',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Undang pengguna dengan menghubungkan domain email dengan organisasi Anda. ',
          headerTitle: 'Undangan otomatis',
          primaryButton: 'Kelola domain terverifikasi',
        },
        table__emptyRow: 'Tidak ada undangan untuk ditampilkan',
      },
      invitedMembersTab: {
        menuAction__revoke: 'Cabut undangan',
        tableHeader__invited: 'Diundang',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Pengguna yang mendaftar dengan domain email yang cocok, akan dapat melihat saran untuk meminta bergabung dengan organisasi Anda.',
          headerTitle: 'Saran otomatis',
          primaryButton: 'Kelola domain terverifikasi',
        },
        menuAction__approve: 'Menyetujui',
        menuAction__reject: 'Menolak',
        tableHeader__requested: 'Akses yang diminta',
        table__emptyRow: 'Tidak ada permintaan untuk ditampilkan',
      },
      start: {
        headerTitle__invitations: 'Undangan',
        headerTitle__members: 'Anggota',
        headerTitle__requests: 'Permintaan',
      },
    },
    navbar: {
      description: 'Kelola organisasi Anda.',
      general: 'Umum',
      members: 'Anggota',
      title: 'Organisasi',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'Jenis "{{organizationName}}" di bawah untuk melanjutkan.',
          messageLine1: 'Apakah Anda yakin ingin menghapus organisasi ini?',
          messageLine2:
            'Tindakan ini bersifat permanen dan tidak dapat diubah.',
          successMessage: 'Anda telah menghapus organisasi.',
          title: 'Hapus organisasi',
        },
        leaveOrganization: {
          actionDescription:
            'Jenis "{{organizationName}}" di bawah untuk melanjutkan.',
          messageLine1: 'Apakah Anda yakin ingin keluar dari organisasi ini? ',
          messageLine2:
            'Tindakan ini bersifat permanen dan tidak dapat diubah.',
          successMessage: 'Anda telah meninggalkan organisasi.',
          title: 'Keluar dari organisasi',
        },
        title: 'Bahaya',
      },
      domainSection: {
        menuAction__manage: 'Mengelola',
        menuAction__remove: 'Menghapus',
        menuAction__verify: 'Memeriksa',
        primaryButton: 'Tambahkan domain',
        subtitle:
          'Izinkan pengguna untuk bergabung dengan organisasi secara otomatis atau meminta untuk bergabung berdasarkan domain email terverifikasi.',
        title: 'Domain terverifikasi',
      },
      successMessage: 'Organisasi telah diperbarui.',
      title: 'Memperbaharui profil',
    },
    removeDomainPage: {
      messageLine1: 'Domain email {{domain}} akan dihapus.',
      messageLine2:
        'Pengguna tidak akan dapat bergabung dengan organisasi secara otomatis setelah ini.',
      successMessage: '{{domain}} telah dihapus.',
      title: 'Hapus domain',
    },
    start: {
      headerTitle__general: 'Umum',
      headerTitle__members: 'Anggota',
      profileSection: {
        primaryButton: 'Memperbaharui profil',
        title: 'Profil Organisasi',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          'Menghapus domain ini akan memengaruhi pengguna yang diundang.',
        removeDomainActionLabel__remove: 'Hapus domain',
        removeDomainSubtitle: 'Hapus domain ini dari domain terverifikasi Anda',
        removeDomainTitle: 'Hapus domain',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Pengguna secara otomatis diundang untuk bergabung dengan organisasi saat mereka mendaftar dan dapat bergabung kapan saja.',
        automaticInvitationOption__label: 'Undangan otomatis',
        automaticSuggestionOption__description:
          'Pengguna menerima saran untuk meminta bergabung, namun harus disetujui oleh admin sebelum mereka dapat bergabung dengan organisasi.',
        automaticSuggestionOption__label: 'Saran otomatis',
        calloutInfoLabel:
          'Mengubah mode pendaftaran hanya akan memengaruhi pengguna baru.',
        calloutInvitationCountLabel:
          'Undangan tertunda yang dikirim ke pengguna: {{count}}',
        calloutSuggestionCountLabel:
          'Saran yang menunggu keputusan dikirimkan kepada pengguna: {{count}}',
        manualInvitationOption__description:
          'Pengguna hanya dapat diundang secara manual ke organisasi.',
        manualInvitationOption__label: 'Tidak ada pendaftaran otomatis',
        subtitle:
          'Pilih bagaimana pengguna dari domain ini dapat bergabung dengan organisasi.',
      },
      start: {
        headerTitle__danger: 'Bahaya',
        headerTitle__enrollment: 'Opsi pendaftaran',
      },
      subtitle: 'Domainnya {{domain}} sekarang telah diverifikasi. ',
      title: 'Memperbarui {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle:
        'Masukkan kode verifikasi yang dikirimkan ke alamat email Anda',
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'Domainnya {{domainName}} perlu diverifikasi melalui email.',
      subtitleVerificationCodeScreen:
        'Kode verifikasi telah dikirim ke {{emailAddress}}. ',
      title: 'Verifikasi domain',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'Buat organisasi',
    action__invitationAccept: 'Bergabung',
    action__manageOrganization: 'Mengelola',
    action__suggestionsAccept: 'Permintaan untuk bergabung',
    notSelected: 'Tidak ada organisasi yang dipilih',
    personalWorkspace: 'Akun pribadi',
    suggestionsAcceptedLabel: 'Menunggu persetujuan',
  },
  paginationButton__next: 'Berikutnya',
  paginationButton__previous: 'Sebelumnya',
  paginationRowText__displaying: 'Menampilkan',
  paginationRowText__of: 'dari',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Menambahkan akun',
      action__signOutAll: 'Keluar dari semua akun',
      subtitle: 'Pilih akun yang ingin Anda lanjutkan.',
      title: 'Pilih akun',
    },
    alternativeMethods: {
      actionLink: 'Mendapatkan bantuan',
      actionText: 'Tidak punya semua ini?',
      blockButton__backupCode: 'Gunakan kode cadangan',
      blockButton__emailCode: 'Kode email ke {{identifier}}',
      blockButton__emailLink: 'Tautan email ke {{identifier}}',
      blockButton__passkey: 'Masuk dengan kunci sandi Anda',
      blockButton__password: 'Masuk dengan kata sandi Anda',
      blockButton__phoneCode: 'Kirim kode SMS ke {{identifier}}',
      blockButton__totp: 'Gunakan aplikasi pengautentikasi Anda',
      getHelp: {
        blockButton__emailSupport: 'Dukungan email',
        content:
          'Jika Anda mengalami kesulitan masuk ke akun Anda, kirimkan email kepada kami dan kami akan bekerja sama dengan Anda untuk memulihkan akses sesegera mungkin.',
        title: 'Mendapatkan bantuan',
      },
      subtitle: 'Menghadapi masalah? ',
      title: 'Gunakan metode lain',
    },
    backupCodeMfa: {
      subtitle:
        'Kode cadangan Anda adalah kode yang Anda dapatkan saat menyiapkan autentikasi dua langkah.',
      title: 'Masukkan kode cadangan',
    },
    emailCode: {
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'untuk melanjutkan {{applicationName}}',
      title: 'Periksa email Anda',
    },
    emailLink: {
      expired: {
        subtitle: 'Kembali ke tab asli untuk melanjutkan.',
        title: 'Tautan verifikasi ini telah kedaluwarsa',
      },
      failed: {
        subtitle: 'Kembali ke tab asli untuk melanjutkan.',
        title: 'Tautan verifikasi ini tidak valid',
      },
      formSubtitle: 'Gunakan tautan verifikasi yang dikirimkan ke email Anda',
      formTitle: 'Tautan verifikasi',
      loading: {
        subtitle: 'Anda akan segera diarahkan',
        title: 'Masuk...',
      },
      resendButton: 'Tidak menerima tautan? ',
      subtitle: 'untuk melanjutkan {{applicationName}}',
      title: 'Periksa email Anda',
      unusedTab: {
        title: 'Anda dapat menutup tab ini',
      },
      verified: {
        subtitle: 'Anda akan segera diarahkan',
        title: 'Berhasil masuk',
      },
      verifiedSwitchTab: {
        subtitle: 'Kembali ke tab asli untuk melanjutkan',
        subtitleNewTab: 'Kembali ke tab yang baru dibuka untuk melanjutkan',
        titleNewTab: 'Masuk di tab lain',
      },
    },
    forgotPassword: {
      formTitle: 'Setel ulang kode kata sandi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'untuk mengatur ulang kata sandi Anda',
      subtitle_email: 'Pertama, masukkan kode yang dikirimkan ke ID email Anda',
      subtitle_phone: 'Pertama, masukkan kode yang dikirimkan ke ponsel Anda',
      title: 'Setel ulang kata sandi',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'Mereset password Anda',
      label__alternativeMethods: 'Atau, masuk dengan metode lain',
      title: 'Tidak ingat kata sandi?',
    },
    noAvailableMethods: {
      message:
        'Tidak dapat melanjutkan masuk. Tidak ada faktor autentikasi yang tersedia.',
      subtitle: 'Terjadi kesalahan',
      title: 'Tidak dapat masuk',
    },
    passkey: {
      subtitle:
        'Menggunakan kunci sandi Anda akan mengonfirmasi bahwa itu memang Anda. ',
      title: 'Gunakan kunci sandi Anda',
    },
    password: {
      actionLink: 'Gunakan metode lain',
      subtitle: 'Masukkan kata sandi yang terkait dengan akun Anda',
      title: 'Masukkan kata sandi Anda',
    },
    passwordPwned: {
      title: 'Kata sandi disusupi',
    },
    phoneCode: {
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'untuk melanjutkan {{applicationName}}',
      title: 'Periksa telepon mu',
    },
    phoneCodeMfa: {
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle:
        'Untuk melanjutkan, silakan masukkan kode verifikasi yang dikirimkan ke ponsel Anda',
      title: 'Periksa telepon mu',
    },
    resetPassword: {
      formButtonPrimary: 'Atur Ulang Kata Sandi',
      requiredMessage:
        'Untuk alasan keamanan, Anda perlu mengatur ulang kata sandi Anda.',
      successMessage: 'Kata sandi Anda berhasil diubah. ',
      title: 'Tetapkan kata sandi baru',
    },
    resetPasswordMfa: {
      detailsLabel:
        'Kami perlu memverifikasi identitas Anda sebelum mengatur ulang kata sandi Anda.',
    },
    start: {
      actionLink: 'Mendaftar',
      actionLink__use_email: 'Gunakan email',
      actionLink__use_email_username: 'Gunakan email atau nama pengguna',
      actionLink__use_passkey: 'Gunakan kunci sandi sebagai gantinya',
      actionLink__use_phone: 'Gunakan telepon',
      actionLink__use_username: 'Gunakan nama pengguna',
      actionText: 'Belum punya akun?',
      subtitle: 'Selamat Datang kembali! ',
      title: 'Masuk ke {{applicationName}}',
    },
    totpMfa: {
      formTitle: 'Kode verifikasi',
      subtitle:
        'Untuk melanjutkan, masukkan kode verifikasi yang dihasilkan oleh aplikasi autentikator Anda',
      title: 'Verifikasi dua langkah',
    },
  },
  signInEnterPasswordTitle: 'Masukkan kata sandi Anda',
  signUp: {
    continue: {
      actionLink: 'Masuk',
      actionText: 'Sudah memiliki akun?',
      subtitle: 'Silakan isi rincian yang tersisa untuk melanjutkan.',
      title: 'Isi kolom yang hilang',
    },
    emailCode: {
      formSubtitle:
        'Masukkan kode verifikasi yang dikirimkan ke alamat email Anda',
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'Masukkan kode verifikasi yang dikirimkan ke email Anda',
      title: 'Verifikasi email Anda',
    },
    emailLink: {
      formSubtitle:
        'Gunakan tautan verifikasi yang dikirimkan ke alamat email Anda',
      formTitle: 'Tautan verifikasi',
      loading: {
        title: 'Mendaftar...',
      },
      resendButton: 'Tidak menerima tautan? ',
      subtitle: 'untuk melanjutkan {{applicationName}}',
      title: 'Verifikasi email Anda',
      verified: {
        title: 'Berhasil mendaftar',
      },
      verifiedSwitchTab: {
        subtitle: 'Kembali ke tab yang baru dibuka untuk melanjutkan',
        subtitleNewTab: 'Kembali ke tab sebelumnya untuk melanjutkan',
        title: 'Email berhasil diverifikasi',
      },
    },
    phoneCode: {
      formSubtitle:
        'Masukkan kode verifikasi yang dikirimkan ke nomor telepon Anda',
      formTitle: 'Kode verifikasi',
      resendButton: 'Tidak menerima kode? ',
      subtitle: 'Masukkan kode verifikasi yang dikirimkan ke ponsel Anda',
      title: 'Verifikasi telepon Anda',
    },
    start: {
      actionLink: 'Masuk',
      actionText: 'Sudah memiliki akun?',
      subtitle: 'Selamat datang! ',
      title: 'buat akunmu',
    },
  },
  socialButtonsBlockButton: 'Berlanjut dengan {{provider|titleize}}',
  unstable__errors: {
    captcha_invalid: 'Pendaftaran gagal karena validasi keamanan gagal. ',
    captcha_unavailable: 'Pendaftaran gagal karena validasi bot gagal. ',
    form_code_incorrect: '',
    form_identifier_exists: '',
    form_identifier_exists__email_address: 'Alamat email ini sudah dipakai. ',
    form_identifier_exists__phone_number: 'Nomor telepon ini sudah dipakai. ',
    form_identifier_exists__username: 'Nama pengguna ini sudah dipakai. ',
    form_identifier_not_found: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address:
      'Alamat email harus berupa alamat email yang valid.',
    form_param_format_invalid__phone_number:
      'Nomor telepon harus dalam format internasional yang valid',
    form_param_max_length_exceeded__first_name:
      'Nama depan tidak boleh melebihi 256 karakter.',
    form_param_max_length_exceeded__last_name:
      'Nama belakang tidak boleh melebihi 256 karakter.',
    form_param_max_length_exceeded__name:
      'Nama tidak boleh melebihi 256 karakter.',
    form_param_nil: '',
    form_password_incorrect: '',
    form_password_length_too_short: '',
    form_password_not_strong_enough: 'Kata sandi Anda tidak cukup kuat.',
    form_password_pwned:
      'Kata sandi ini ditemukan sebagai bagian dari pelanggaran dan tidak dapat digunakan, silakan coba kata sandi lain.',
    form_password_pwned__sign_in:
      'Kata sandi ini ditemukan sebagai bagian dari pelanggaran dan tidak dapat digunakan, harap setel ulang kata sandi Anda.',
    form_password_size_in_bytes_exceeded:
      'Kata sandi Anda telah melampaui jumlah byte maksimum yang diperbolehkan, harap persingkat atau hapus beberapa karakter khusus.',
    form_password_validation_failed: 'Kata kunci Salah',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed:
      'Anda tidak dapat menghapus identifikasi terakhir Anda.',
    not_allowed_access: '',
    passkey_already_exists: 'Kunci sandi sudah terdaftar pada perangkat ini.',
    passkey_not_supported: 'Kunci sandi tidak didukung pada perangkat ini.',
    passkey_registration_cancelled:
      'Registrasi kunci sandi dibatalkan atau batas waktunya habis.',
    passkey_retrieval_cancelled:
      'Verifikasi kunci sandi dibatalkan atau batas waktunya habis.',
    passkey_pa_not_supported:
      'Pendaftaran memerlukan pengautentikasi platform tetapi perangkat tidak mendukungnya.',
    passwordComplexity: {
      maximumLength: 'kurang dari {{length}} karakter',
      minimumLength: '{{length}} atau lebih karakter',
      requireLowercase: 'huruf kecil',
      requireNumbers: 'sebuah angka',
      requireSpecialCharacter: 'karakter khusus',
      requireUppercase: 'Huruf besar',
      sentencePrefix: 'Kata sandi Anda harus mengandung',
    },
    phone_number_exists: 'Nomor telepon ini sudah dipakai. ',
    zxcvbn: {
      couldBeStronger: 'Kata sandi Anda berfungsi, namun bisa lebih kuat. ',
      goodPassword:
        'Kata sandi Anda memenuhi semua persyaratan yang diperlukan.',
      notEnough: 'Kata sandi Anda tidak cukup kuat.',
      suggestions: {
        allUppercase:
          'Gunakan huruf besar pada beberapa huruf, namun tidak semua huruf.',
        anotherWord: 'Tambahkan lebih banyak kata yang kurang umum.',
        associatedYears: 'Hindari tahun-tahun yang berhubungan dengan Anda.',
        capitalization: 'Gunakan huruf kapital lebih dari huruf pertama.',
        dates: 'Hindari tanggal dan tahun yang berhubungan dengan Anda.',
        l33t: "Hindari penggantian huruf yang mudah ditebak seperti '@' dengan 'a'.",
        longerKeyboardPattern:
          'Gunakan pola keyboard yang lebih panjang dan ubah arah pengetikan beberapa kali.',
        noNeed:
          'Anda dapat membuat kata sandi yang kuat tanpa menggunakan simbol, angka, atau huruf besar.',
        pwned:
          'Jika Anda menggunakan kata sandi ini di tempat lain, Anda harus mengubahnya.',
        recentYears: 'Hindari beberapa tahun terakhir.',
        repeated: 'Hindari pengulangan kata dan karakter.',
        reverseWords: 'Hindari ejaan kata-kata umum yang terbalik.',
        sequences: 'Hindari urutan karakter yang umum.',
        useWords: 'Gunakan banyak kata, tetapi hindari frasa umum.',
      },
      warnings: {
        common: 'Ini adalah kata sandi yang umum digunakan.',
        commonNames: 'Nama umum dan nama keluarga mudah ditebak.',
        dates: 'Tanggal mudah ditebak.',
        extendedRepeat:
          'Pola karakter berulang seperti "abcabcabc" mudah ditebak.',
        keyPattern: 'Pola keyboard pendek mudah ditebak.',
        namesByThemselves: 'Nama tunggal atau nama keluarga mudah ditebak.',
        pwned: 'Kata sandi Anda terekspos oleh pelanggaran data di Internet.',
        recentYears: 'Beberapa tahun terakhir mudah ditebak.',
        sequences: 'Urutan karakter umum seperti "abc" mudah ditebak.',
        similarToCommon: 'Ini mirip dengan kata sandi yang umum digunakan.',
        simpleRepeat: 'Karakter berulang seperti "aaa" mudah ditebak.',
        straightRow:
          'Deretan tombol yang lurus pada keyboard Anda mudah ditebak.',
        topHundred: 'Ini adalah kata sandi yang sering digunakan.',
        topTen: 'Ini adalah kata sandi yang sering digunakan.',
        userInputs:
          'Tidak boleh ada data pribadi atau halaman apa pun yang terkait.',
        wordByItself: 'Kata-kata tunggal mudah ditebak.',
      },
    },
  },
  userButton: {
    action__addAccount: 'Menambahkan akun',
    action__manageAccount: 'Kelola akun',
    action__signOut: 'Keluar',
    action__signOutAll: 'Keluar dari semua akun',
  },
  userProfile: {
    __experimental_passkeyScreen: {
      removeResource: {
        messageLine1: '{{name}} akan dihapus dari akun ini.',
        title: 'Hapus kunci sandi',
      },
      subtitle__rename:
        'Anda dapat mengubah nama kunci sandi agar lebih mudah ditemukan.',
      title__rename: 'Ganti nama Kunci Sandi',
    },
    backupCodePage: {
      actionLabel__copied: 'Disalin!',
      actionLabel__copy: 'Salin semua',
      actionLabel__download: 'Unduh .txt',
      actionLabel__print: 'Mencetak',
      infoText1: 'Kode cadangan akan diaktifkan untuk akun ini.',
      infoText2: 'Jaga kerahasiaan kode cadangan dan simpan dengan aman. ',
      subtitle__codelist: 'Simpan dengan aman dan rahasiakan.',
      successMessage: 'Kode cadangan sekarang diaktifkan. ',
      successSubtitle:
        'Anda dapat menggunakan salah satu dari ini untuk masuk ke akun Anda, jika Anda kehilangan akses ke perangkat otentikasi Anda.',
      title: 'Tambahkan verifikasi kode cadangan',
      title__codelist: 'Kode cadangan',
    },
    connectedAccountPage: {
      formHint: 'Pilih penyedia untuk menghubungkan akun Anda.',
      formHint__noAccounts: 'Tidak ada penyedia akun eksternal yang tersedia.',
      removeResource: {
        messageLine1: '{{identifier}} akan dihapus dari akun ini.',
        messageLine2:
          'Anda tidak lagi dapat menggunakan akun terhubung ini dan fitur apa pun yang bergantung padanya tidak akan berfungsi lagi.',
        successMessage: '{{connectedAccount}} telah dihapus dari akun Anda.',
        title: 'Hapus akun yang terhubung',
      },
      socialButtonsBlockButton: '{{provider|titleize}}',
      successMessage: 'Penyedia telah ditambahkan ke akun Anda',
      title: 'Tambahkan akun yang terhubung',
    },
    deletePage: {
      actionDescription: 'Ketik "Hapus akun" di bawah untuk melanjutkan.',
      confirm: 'Hapus akun',
      messageLine1: 'Apakah Anda yakin ingin menghapus akun Anda?',
      messageLine2: 'Tindakan ini bersifat permanen dan tidak dapat diubah.',
      title: 'Hapus akun',
    },
    emailAddressPage: {
      emailCode: {
        formHint:
          'Email yang berisi kode verifikasi akan dikirim ke alamat email ini.',
        formSubtitle:
          'Masukkan kode verifikasi yang dikirimkan ke {{identifier}}',
        formTitle: 'Kode verifikasi',
        resendButton: 'Tidak menerima kode? ',
        successMessage: 'Email {{identifier}} telah ditambahkan ke akun Anda.',
      },
      emailLink: {
        formHint:
          'Email yang berisi tautan verifikasi akan dikirim ke alamat email ini.',
        formSubtitle:
          'Klik tautan verifikasi di email yang dikirim ke {{identifier}}',
        formTitle: 'Tautan verifikasi',
        resendButton: 'Tidak menerima tautan? ',
        successMessage: 'Email {{identifier}} telah ditambahkan ke akun Anda.',
      },
      removeResource: {
        messageLine1: '{{identifier}} akan dihapus dari akun ini.',
        messageLine2:
          'Anda tidak dapat lagi masuk menggunakan alamat email ini.',
        successMessage: '{{emailAddress}} telah dihapus dari akun Anda.',
        title: 'Hapus alamat email',
      },
      title: 'Tambahkan alamat email',
      verifyTitle: 'Verifikasi alamat email',
    },
    formButtonPrimary__add: 'Menambahkan',
    formButtonPrimary__continue: 'Melanjutkan',
    formButtonPrimary__finish: 'Menyelesaikan',
    formButtonPrimary__remove: 'Menghapus',
    formButtonPrimary__save: 'Menyimpan',
    formButtonReset: 'Membatalkan',
    mfaPage: {
      formHint: 'Pilih metode untuk ditambahkan.',
      title: 'Tambahkan verifikasi dua langkah',
    },
    mfaPhoneCodePage: {
      backButton: 'Gunakan nomor yang ada',
      primaryButton__addPhoneNumber: 'Tambahkan nomor telepon',
      removeResource: {
        messageLine1:
          '{{identifier}} tidak akan lagi menerima kode verifikasi saat masuk.',
        messageLine2: 'Akun Anda mungkin tidak aman. ',
        successMessage:
          'Verifikasi dua langkah kode SMS telah dihapus {{mfaPhoneCode}}',
        title: 'Hapus verifikasi dua langkah',
      },
      subtitle__availablePhoneNumbers:
        'Pilih nomor telepon yang ada untuk mendaftar verifikasi dua langkah kode SMS atau tambahkan yang baru.',
      subtitle__unavailablePhoneNumbers:
        'Tidak ada nomor telepon yang tersedia untuk mendaftar verifikasi dua langkah kode SMS, silakan tambahkan yang baru.',
      successMessage1:
        'Saat masuk, Anda harus memasukkan kode verifikasi yang dikirimkan ke nomor telepon ini sebagai langkah tambahan.',
      successMessage2:
        'Simpan kode cadangan ini dan simpan di tempat yang aman. ',
      successTitle: 'Verifikasi kode SMS diaktifkan',
      title: 'Tambahkan verifikasi kode SMS',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'Pindai kode QR saja',
        buttonUnableToScan__nonPrimary: 'Tidak dapat memindai kode QR?',
        infoText__ableToScan:
          'Siapkan metode masuk baru di aplikasi autentikator Anda dan pindai kode QR berikut untuk menautkannya ke akun Anda.',
        infoText__unableToScan:
          'Siapkan metode masuk baru di pengautentikasi Anda dan masukkan Kunci yang disediakan di bawah.',
        inputLabel__unableToScan1:
          'Pastikan Kata sandi berbasis waktu atau Satu kali diaktifkan, lalu selesaikan penautan akun Anda.',
        inputLabel__unableToScan2:
          'Alternatifnya, jika pengautentikasi Anda mendukung URI TOTP, Anda juga dapat menyalin URI lengkap.',
      },
      removeResource: {
        messageLine1:
          'Kode verifikasi dari pengautentikasi ini tidak diperlukan lagi saat masuk.',
        messageLine2: 'Akun Anda mungkin tidak aman. ',
        successMessage:
          'Verifikasi dua langkah melalui aplikasi pengautentikasi telah dihapus.',
        title: 'Hapus verifikasi dua langkah',
      },
      successMessage: 'Verifikasi dua langkah sekarang diaktifkan. ',
      title: 'Tambahkan aplikasi pengautentikasi',
      verifySubtitle:
        'Masukkan kode verifikasi yang dihasilkan oleh pengautentikasi Anda',
      verifyTitle: 'Kode verifikasi',
    },
    mobileButton__menu: 'Menu',
    navbar: {
      account: 'Profil',
      description: 'Kelola informasi akun Anda.',
      security: 'Keamanan',
      title: 'Akun',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: '{{name}} akan dihapus dari akun ini.',
        title: 'Hapus kunci sandi',
      },
      subtitle__rename:
        'Anda dapat mengubah nama kunci sandi agar lebih mudah ditemukan.',
      title__rename: 'Ganti nama Kunci Sandi',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'Disarankan untuk keluar dari semua perangkat lain yang mungkin menggunakan kata sandi lama Anda.',
      readonly:
        'Kata sandi Anda saat ini tidak dapat diedit karena Anda hanya dapat masuk melalui koneksi perusahaan.',
      successMessage__set: 'Kata sandi Anda telah ditetapkan.',
      successMessage__signOutOfOtherSessions:
        'Semua perangkat lain telah keluar.',
      successMessage__update: 'Kata sandi Anda telah diperbarui.',
      title__set: 'Tetapkan kata sandi',
      title__update: 'Perbarui kata sandi',
    },
    phoneNumberPage: {
      infoText:
        'Pesan teks yang berisi kode verifikasi akan dikirim ke nomor telepon ini. ',
      removeResource: {
        messageLine1: '{{identifier}} akan dihapus dari akun ini.',
        messageLine2:
          'Anda tidak dapat lagi masuk menggunakan nomor telepon ini.',
        successMessage: '{{phoneNumber}} telah dihapus dari akun Anda.',
        title: 'Hapus nomor telepon',
      },
      successMessage: '{{identifier}} telah ditambahkan ke akun Anda.',
      title: 'Tambahkan nomor telepon',
      verifySubtitle:
        'Masukkan kode verifikasi yang dikirimkan ke {{identifier}}',
      verifyTitle: 'Verifikasi nomor telepon',
    },
    profilePage: {
      fileDropAreaHint: 'Ukuran yang disarankan 1:1, hingga 10MB.',
      imageFormDestructiveActionSubtitle: 'Menghapus',
      imageFormSubtitle: 'Mengunggah',
      imageFormTitle: 'Gambar profil',
      readonly:
        'Informasi profil Anda telah disediakan oleh koneksi perusahaan dan tidak dapat diedit.',
      successMessage: 'Profil Anda telah diperbarui.',
      title: 'Memperbaharui profil',
    },
    start: {
      __experimental_passkeysSection: {
        menuAction__destructive: 'Menghapus',
        menuAction__rename: 'Ganti nama',
        title: 'Kunci sandi',
      },
      activeDevicesSection: {
        destructiveAction: 'Keluar dari perangkat',
        title: 'Perangkat aktif',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'Coba lagi',
        actionLabel__reauthorize: 'Otorisasi sekarang',
        destructiveActionTitle: 'Menghapus',
        primaryButton: 'Hubungkan akun',
        subtitle__reauthorize:
          'Cakupan yang diperlukan telah diperbarui, dan Anda mungkin mengalami fungsionalitas terbatas. ',
        title: 'Akun yang terhubung',
      },
      dangerSection: {
        deleteAccountButton: 'Hapus akun',
        title: 'Hapus akun',
      },
      emailAddressesSection: {
        destructiveAction: 'Hapus email',
        detailsAction__nonPrimary: 'Tetapkan sebagai yang utama',
        detailsAction__primary: 'Verifikasi lengkap',
        detailsAction__unverified: 'Memeriksa',
        primaryButton: 'Tambahkan alamat email',
        title: 'Alamat email',
      },
      enterpriseAccountsSection: {
        title: 'Akun perusahaan',
      },
      headerTitle__account: 'Profil lengkap',
      headerTitle__security: 'Keamanan',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'Diperbarui',
          headerTitle: 'Kode cadangan',
          subtitle__regenerate:
            'Dapatkan serangkaian kode cadangan aman baru. ',
          title__regenerate: 'Buat ulang kode cadangan',
        },
        phoneCode: {
          actionLabel__setDefault: 'Ditetapkan sebagai default',
          destructiveActionLabel: 'Menghapus',
        },
        primaryButton: 'Tambahkan verifikasi dua langkah',
        title: 'Verifikasi dua langkah',
        totp: {
          destructiveActionTitle: 'Menghapus',
          headerTitle: 'Aplikasi autentikator',
        },
      },
      passkeysSection: {
        menuAction__destructive: 'Menghapus',
        menuAction__rename: 'Ganti nama',
        title: 'Kunci sandi',
      },
      passwordSection: {
        primaryButton__setPassword: 'Tetapkan kata sandi',
        primaryButton__updatePassword: 'Perbarui kata sandi',
        title: 'Kata sandi',
      },
      phoneNumbersSection: {
        destructiveAction: 'Hapus nomor telepon',
        detailsAction__nonPrimary: 'Tetapkan sebagai yang utama',
        detailsAction__primary: 'Verifikasi lengkap',
        detailsAction__unverified: 'Verifikasi nomor telepon',
        primaryButton: 'Tambahkan nomor telepon',
        title: 'Nomor telepon',
      },
      profileSection: {
        primaryButton: 'Memperbaharui profil',
        title: 'Profil',
      },
      usernameSection: {
        primaryButton__setUsername: 'Tetapkan nama pengguna',
        primaryButton__updateUsername: 'Perbarui nama pengguna',
        title: 'Nama belakang',
      },
      web3WalletsSection: {
        destructiveAction: 'Hapus dompet',
        primaryButton: 'dompet Web3',
        title: 'dompet Web3',
      },
    },
    usernamePage: {
      successMessage: 'Nama pengguna Anda telah diperbarui.',
      title__set: 'Tetapkan nama pengguna',
      title__update: 'Perbarui nama pengguna',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} akan dihapus dari akun ini.',
        messageLine2:
          'Anda tidak lagi dapat masuk menggunakan dompet web3 ini.',
        successMessage: '{{web3Wallet}} telah dihapus dari akun Anda.',
        title: 'Hapus dompet web3',
      },
      subtitle__availableWallets:
        'Pilih dompet web3 untuk dihubungkan ke akun Anda.',
      subtitle__unavailableWallets: 'Tidak ada dompet web3 yang tersedia.',
      successMessage: 'Dompet telah ditambahkan ke akun Anda.',
      title: 'Tambahkan dompet web3',
    },
  },
} as const;
